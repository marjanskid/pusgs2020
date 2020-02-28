export class Student {
    indexNum: string;
    name: string;
    points: number;
    mark: number;

    constructor(indexNum: string, name: string, points: number = 0) {
        this.indexNum = indexNum;
        this.name = name;
        this.points = points;
        this.setMark(points);
    }

    setMark(points: number): void {
        if (points <= 50)
            this.mark = 5;
        else if (points <= 60)
            this.mark = 6;
        else if (points <= 70)
            this.mark = 7;
        else if (points <= 80)
            this.mark = 8;
        else if (points <= 90)
            this.mark = 9;
        else
            this.mark = 10;
        
    }
}
