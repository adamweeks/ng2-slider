export class SliderGamePiece {
    constructor(public position:number) {

    }

    get label(): string {
        let label = '\u00A0';
        if (this.position) {
            label = this.position.toString();
        }
        return label;
    }
}
