export class Evento {

    public id: string;
    public nombre: string;
    public descripcion: string;
    public plazas: number;
    public precio: number;
    public fecha: Date;
    public usuario: string;
	public plazasRestantes: number;
    public imagen: string;
	constructor()
	{
		this.id="";
	}
    
}