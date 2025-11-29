import React, { useState, useRef } from 'react';
    import { Upload, X, Image as ImageIcon, AlertCircle } from 'lucide-react';
    import { motion } from 'framer-motion';

    interface ImageUploadProps {
      onImagesChange: (images: File[]) => void;
      maxImages?: number;
      maxSizePerImage?: number; // in MB
      acceptedTypes?: string[];
      className?: string;
    }

    const ImageUpload: React.FC<ImageUploadProps> = ({
      onImagesChange,
      maxImages = 5,
      maxSizePerImage = 5,
      acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
      className = ''
    }) => {
      const [images, setImages] = useState<File[]>([]);
      const [previews, setPreviews] = useState<string[]>([]);
      const [dragActive, setDragActive] = useState(false);
      const [error, setError] = useState<string>('');
      const fileInputRef = useRef<HTMLInputElement>(null);

      const validateFile = (file: File): string | null => {
        if (!acceptedTypes.includes(file.type)) {
          return `Format non supporté. Utilisez: ${acceptedTypes.map(type => type.split('/')[1]).join(', ')}`;
        }
        if (file.size > maxSizePerImage * 1024 * 1024) {
          return `L'image doit faire moins de ${maxSizePerImage}MB`;
        }
        return null;
      };

      const handleFiles = (files: FileList) => {
        setError('');
        const newFiles: File[] = [];
        const newPreviews: string[] = [];

        Array.from(files).forEach(file => {
          const validationError = validateFile(file);
          if (validationError) {
            setError(validationError);
            return;
          }

          if (images.length + newFiles.length < maxImages) {
            newFiles.push(file);
            const reader = new FileReader();
            reader.onload = (e) => {
              newPreviews.push(e.target?.result as string);
              if (newPreviews.length === newFiles.length) {
                const updatedImages = [...images, ...newFiles];
                const updatedPreviews = [...previews, ...newPreviews];
                setImages(updatedImages);
                setPreviews(updatedPreviews);
                onImagesChange(updatedImages);
              }
            };
            reader.readAsDataURL(file);
          }
        });

        if (images.length + newFiles.length >= maxImages) {
          setError(`Maximum ${maxImages} images autorisées`);
        }
      };

      const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
          setDragActive(true);
        } else if (e.type === 'dragleave') {
          setDragActive(false);
        }
      };

      const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleFiles(e.dataTransfer.files);
        }
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
          handleFiles(e.target.files);
        }
      };

      const removeImage = (index: number) => {
        const updatedImages = images.filter((_, i) => i !== index);
        const updatedPreviews = previews.filter((_, i) => i !== index);
        setImages(updatedImages);
        setPreviews(updatedPreviews);
        onImagesChange(updatedImages);
        setError('');
      };

      const openFileDialog = () => {
        fileInputRef.current?.click();
      };

      return (
        <div className={`space-y-4 ${className}`}>
          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 cursor-pointer ${
              dragActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={openFileDialog}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept={acceptedTypes.join(',')}
              onChange={handleChange}
              className="hidden"
            />
            
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-blue-50 rounded-full">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Glissez vos images ici ou cliquez pour sélectionner
                </p>
                <p className="text-sm text-gray-500">
                  Formats acceptés: JPG, PNG, WebP • Max {maxSizePerImage}MB par image • {maxImages} images max
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
            >
              <AlertCircle className="h-5 w-5" />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          {/* Image Previews */}
          {previews.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900">
                Images sélectionnées ({previews.length}/{maxImages})
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {previews.map((preview, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(index);
                      }}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-black/50 text-white text-xs px-2 py-1 rounded truncate">
                        {images[index]?.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Stats */}
          {images.length > 0 && (
            <div className="flex items-center justify-between text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <ImageIcon className="h-4 w-4" />
                <span>{images.length} image{images.length > 1 ? 's' : ''} sélectionnée{images.length > 1 ? 's' : ''}</span>
              </div>
              <div>
                Taille totale: {(images.reduce((acc, file) => acc + file.size, 0) / (1024 * 1024)).toFixed(2)} MB
              </div>
            </div>
          )}
        </div>
      );
    };

    export default ImageUpload;