export class ElemMultimedia {
    public id;
    public name;
    public img_url;
    public bio;
    constructor(
        id: number,
        name: string,
        img_url: string,
        bio: string,
        ) {
        this.id = id;
        this.name = name;
        this.img_url = img_url;
        this.bio = bio;
    }
}
