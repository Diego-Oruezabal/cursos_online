import { currentUser } from "@clerk/nextjs/server"

import prisma from "@/lib/prisma";

import { Header } from "./components";
import { ListCourses } from "./components/ListCoruses";


export default async function TeacherPage() {
    const user = await currentUser();
    
    if(!user) {
        return <p>Not signed in</p>
    }
    
const courses =await prisma.course.findMany({
  where: {
    userId: user.id,
  }
});

  return (
    <div>
      <Header />

      <ListCourses courses = {courses}/>
    </div>
  )
}
