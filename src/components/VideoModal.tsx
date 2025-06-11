
import React from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from '@/components/ui/dialog';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-4xl w-[95vw] h-[95vh] sm:h-auto p-0 border-none bg-transparent shadow-none">
        <div className="relative w-full h-full">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Video container */}
          <div className="w-full h-full bg-black rounded-lg overflow-hidden">
            <div className="relative w-full h-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://customer-cb54xmjlmqvsgehg.cloudflarestream.com/26a0dbe82ebc64692ab0d64b9473b884/iframe?preload=true&poster=https%3A%2F%2Fcustomer-cb54xmjlmqvsgehg.cloudflarestream.com%2F26a0dbe82ebc64692ab0d64b9473b884%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-none"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
                title="Charlotte välkomnar dig till Sommarboosten"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
