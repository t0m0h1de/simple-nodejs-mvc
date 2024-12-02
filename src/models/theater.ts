type Location = {
    longitude: number,
    latitude: number
}

export default class Theater {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public zip: string;
    public phone: string;
    public url: string;
    public location: Location;

    constructor(id: number, name: string, address: string, city: string, zip: string, phone: string, url: string, location: Location) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.phone = phone;
        this.url = url;
        this.location = location;
    }
}
