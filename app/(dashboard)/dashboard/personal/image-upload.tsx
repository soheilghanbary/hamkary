"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import { useDropzone } from "react-dropzone"
import type { FileWithPath } from "react-dropzone"
import { toast, Toaster } from "sonner"

import { useUploadThing } from "@/lib/uploadthing"
import { Button } from "@/components/ui/button"

export default function ImageUpload() {
  const [preview, setPreview] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles)
    setPreview(URL.createObjectURL(acceptedFiles[0]))
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg", ".jpeg"],
    },
  })

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      toast.success("uploaded successfully!")
      setIsLoading(false)
    },
    onUploadError: () => {
      alert("error occurred while uploading")
    },
  })

  return (
    <>
      <div className="mt-4 flex items-center gap-8">
        {files.length ? (
          <div
            className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed"
            {...getRootProps()}
          >
            <Image
              fill
              className="rounded-full object-cover"
              alt="image upload"
              src={preview}
            />
          </div>
        ) : (
          <div
            className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Image
              fill
              alt="placeholder"
              src="/placeholder.png"
              className="rounded-full"
            />
          </div>
        )}
        <div className="space-y-4 py-4">
          <h2>Uplaod your Avatar or Image Profile</h2>
          {files.length ? (
            <Button
              disabled={isLoading}
              onClick={() => {
                setIsLoading(true)
                startUpload(files)
              }}
              variant={"outline"}
            >
              {isLoading ? "Uploading..." : "Upload"}
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      <Toaster richColors />
    </>
  )
}
