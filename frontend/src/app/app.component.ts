import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable, Subscription} from "rxjs";
import {share, switchMap} from "rxjs/operators";
import {Departmen} from "./departmen";
import { Chart } from "Chart.js";


var NameDeaprt: any = [], GetDepartId: any = [], GetUserName: any =[], GetUserId: any =[]
async function getData() {
  const DepUrl = "http://localhost:5000/departments"
  const Url = "http://localhost:5000/users"



  const dep = await fetch(Url)
  const resdep = await fetch(DepUrl)


  const barChartData = await  dep.json()
  const barChartDataDep = await resdep.json()


  const UserName = barChartData.map((x:{name: string})=> x.name)
  const UserId = barChartData.map((x:{departmentId: number})=> x.departmentId)

  const nameDep = barChartDataDep.map((x:{name: string})=> x.name) // Имя отдела
  const GetDepart = barChartDataDep.map((x:{Depart: any})=> x.Depart)
  const DepartId = GetDepart.map((y:{departmentId: number})=> y.departmentId)



  console.log(UserName,UserId)

  NameDeaprt = nameDep
  GetDepartId = GetDepart
  GetUserName = UserName
  GetUserId = UserId


}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  public name = '';
  public departmentId = '';
  public nameDep = '';
  isCollapsed : boolean = true;
  isCollapsedDep : boolean = true;
  title = 'frontend';
  public UserList: User[];
  public UserGet :User[];
  public UserGetId : User["departmentId"];
  public DepartmenList: Departmen[];


  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient
  }
  toggleCollapse(){ this.isCollapsed = !this.isCollapsed;
  if (!this.isCollapsedDep){ this.isCollapsedDep = !this.isCollapsedDep }
  }
  toggleCollapseDep(){ this.isCollapsedDep = !this.isCollapsedDep;
  if (!this.isCollapsed){this.isCollapsed = !this.isCollapsed}
  }


  ngOnInit(): void {

    this.httpClient.get<User[]>('http://localhost:5000/users')
      .subscribe(UserList=>{
        this.UserList = UserList;

      })
    this.httpClient.get<Departmen[]>('http://localhost:5000/departments')
      .subscribe(DepartmenList =>{
        this.DepartmenList = DepartmenList;

      })


async function NameChart() {
await getData()


  var arrays = GetDepartId
  var length = arrays.map(function (array: string | any[]) {
        return array.length;
  })



  const canvas = <HTMLCanvasElement> document.getElementById('myChart')
  const canvas2 = <HTMLCanvasElement> document.getElementById('myChart2')
  const ctx = canvas.getContext('2d')
  if(!ctx || !(ctx instanceof CanvasRenderingContext2D)){ throw new Error('Failed to get 2 context')}
  let chart = new Chart(canvas, {
    type: 'pie',

    data:{
      labels: NameDeaprt,
      datasets: [{
        spanGaps: true,
        label: 'Работник в отделе №',
        data: length,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
        },
     ],
    },
    options:{
      title:{
        text: "Сколько людей работают в отделах",
        display: true
      },
      responsive: true,
      maintainAspectRatio: true,
    }
  });
  let chart2 = new Chart(canvas2, {
    type: 'pie',

    data:{
      labels: GetUserName,
      datasets: [{
        data: GetUserId,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
      },
      ],
    },
    options:{
      title:{
        text: "Работники",
        display: true
      },
      responsive: true,
      maintainAspectRatio: true,
    }
  });
}
NameChart();
}
  onCreat(): void{
    if (this.name && this.departmentId)
      this.httpClient.post<User>('http://localhost:5000/users',
        {
          name : this.name,
          departmentId : this.departmentId
        } )
        .subscribe(User=>{
          this.UserList.push(User);
          this.name = '';
        })
  }

  onCreatDep(): void{
    if (this.nameDep)
      this.httpClient.post<Departmen>('http://localhost:5000/departments',
        {
          name : this.nameDep
        } )
        .subscribe(Departmen=>{
          this.DepartmenList.push(Departmen);
          this.nameDep = '';
        })
  }

  onRemove(UserDeleted : User){
    this.httpClient.delete<void>(
      'http://localhost:5000/users/' + UserDeleted.id
    ).subscribe(() => {
      this.UserList = this.UserList.filter(User => User.id !== UserDeleted.id);
    })
  }
   onRemoveDep(DepDeleted: Departmen){
   this.httpClient.delete<void>(
     'http://localhost:5000/departments/' + DepDeleted.id
   ).subscribe(()=>{
     this.DepartmenList = this.DepartmenList.filter(Department => Department.id !== DepDeleted.id);
   })
 }

}
