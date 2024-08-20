import ContactComp from "@/components/ContactComp";

export default async function Contact() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <ContactComp/>
    </div>
  )
}