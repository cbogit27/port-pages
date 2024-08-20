import ContactComp from "@/components/ContactComp";

export default async function Contact() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <ContactComp/>
    </div>
  )
}