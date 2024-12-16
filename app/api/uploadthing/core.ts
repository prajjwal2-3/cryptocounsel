import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const f = createUploadthing();
const { getUser } = getKindeServerSession();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const user = await getUser();
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      return { uploadedBy: metadata.userId };
    }),

  // New route for PDF uploads
  pdfUploader: f({ pdf: { maxFileSize: "8MB" } })
    .middleware(async () => {
      const user = await getUser();
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("PDF upload complete for userId:", metadata.userId);
      console.log("PDF file url", file.key);
      return { uploadedBy: metadata.userId, fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;