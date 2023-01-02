import { Component, OnInit } from '@angular/core';
import { ProfService } from '../prof.service';
import { CourseModel } from '../add-course/course.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-taken',
  templateUrl: './course-taken.component.html',
  styleUrls: ['./course-taken.component.css']
})
export class CourseTakenComponent implements OnInit {

  courses: CourseModel[];

  constructor(private profService:ProfService,private router:Router) { }

  ngOnInit(): void {
   let profIdC=localStorage.getItem("profId");
    this.profService.getCourses(profIdC).subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
    })
  }

  detailsCoursetaken(course)
  {
    localStorage.setItem("detailsCourseId",course._id.toString());
      this.router.navigate(['details-coursetaken']); 
  }

  deleteCourse(course){
    alert("Delete");
    console.log(course._id);
    this.profService.deleteCourse(course._id);
     
    let profIdC=localStorage.getItem("profId");
    this.profService.getCourses(profIdC).subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
    })
    
  }

}
