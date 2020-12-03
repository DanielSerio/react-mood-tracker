export interface IMoodForm {
  rating: number;
  notes?: string;
  tags?: string[];
}

export interface IMood extends IMoodForm {
  id: string;
  datetime: Date;
}

export default class Mood implements IMood {
  public datetime: Date = new Date();
  public id: string = `${this.datetime.getTime()}`;
  public tags?: string[];

  constructor(
    public rating: number,
    public notes?: string,
    tagString?: string
  ) {
    if (tagString) this.tags = this.tagsList(tagString);
    if (rating < 0) this.rating = 0;
    if (rating > 100) this.rating = 100;
    if (notes) this.notes = notes.trim();
  }

  private tagsList(s: string): string[] {
    return s
    .replace(/\s+/g, '')
    .split(/;/g)
    .filter((v: string) => v.length);
  }
}