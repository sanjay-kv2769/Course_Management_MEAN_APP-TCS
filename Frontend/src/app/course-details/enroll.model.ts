export class EnrollModel{
    constructor(
    public c_name: string,
    public c_professor:string,
    public p_email:string|null,
    public s_name:string,
    public s_email:string,
    public s_education:string,
    public status:string,
    public c_id:string|null
    ){}
}