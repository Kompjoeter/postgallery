class Post {
    constructor(description, dimensions, label, source) {
        this.description = description;
        this.dimensions = dimensions;
        this.id = uuidv4();
        this.label = label;
        this.source = source;
    }
}