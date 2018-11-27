import {ElemMultimedia} from './ElemMultimedia';

export class Serie extends ElemMultimedia{
    public releaseDate: string;
    public valoration: number;

    constructor(id: number,
                name: string,
                img_url: string,
                bio: string,
                releaseDate: string,
                valoration: number) {
        super(id, name, img_url, bio);
        this.releaseDate = releaseDate;
        this.valoration = valoration;
    }
}
