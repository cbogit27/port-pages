import PortComp from "@/components/PortComp";

export default async function Portfolio(){
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <PortComp/>
      </div>
  )
}