import PortComp from "@/components/PortComp";

export default async function Portfolio(){
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <PortComp/>
      </div>
  )
}