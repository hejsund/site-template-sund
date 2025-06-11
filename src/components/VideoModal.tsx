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
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="max-w-4xl w-[90vw] h-auto p-0 border-none bg-transparent shadow-none">
        <div className="relative w-full">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 z-50 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Video container - rotated 90 degrees right */}
          <div className="w-full bg-black rounded-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://customer-cb54xmjlmqvsgehg.cloudflarestream.com/26a0dbe82ebc64692ab0d64b9473b884/iframe?preload=true&autoplay=true&poster=https%3A%2F%2Fcustomer-cb54xmjlmqvsgehg.cloudflarestream.com%2F26a0dbe82ebc64692ab0d64b9473b884%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-none"
                style={{ transform: 'rotate(90deg)' }}
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