export interface Student {
  id: number;
  name: string;
  assigmentScore: number;
  midtermScore: number;
  finalScore: number;
  projectScore: number;
  projectName: string;
  projectDisc: string;
  totalScore?:number;
  totalGrade?:string;
}
