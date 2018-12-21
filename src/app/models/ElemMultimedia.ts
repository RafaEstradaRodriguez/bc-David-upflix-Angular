export class ElemMultimedia {
    public id;
    public name;
    public img_url;
    public bio;
    public releaseDate: string;
    public valoration: number;
    public trailerKey: string;

    constructor(
        id: number,
        name: string,
        img_url: string,
        bio: string,
        releaseDate: string,
        valoration: number,
        trailerKey: string
        ) {
        this.id = id;
        this.name = name;
        this.img_url = img_url;
        this.bio = bio;
        this.releaseDate = releaseDate;
        this.valoration = valoration;
        this.trailerKey = trailerKey;
    }
}
