import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  services = [
    {
      name: "Household Goods of Professional Packing",
      src: "/assets/img/img_21.jpeg",
      description: "The Great Packers and Movers is an institution of the betterment of services related to packing and moving, loading and unloading, shifting services, domestic relocation services."
    },
    {
      name: "Office Moving",
      src: "/assets/img/img_12.jpeg",
      description: "We offer a reliable and dependable service for corporate relocation. The Great Packers and Movers in Pune are a very prominent service provider for corporate relocation services."
    },
    {
      name: "Car, Bike Transportation",
      src: "/assets/img/img_27.jpg",
      description: "Warehouse and Storage Services is Pune offered by The Great Packers and Movers also offers by all Packers and Movers for giving them best support to industry business persons."
    },
    {
      name: "Residencial Relocation service",
      src: "/assets/img/img_1.jpeg",
      description: "Packers And Movers in Pune Local are one of the leading packers and movers."
    },
    {
      name: "Industrial machinery Relocation",
      src: "/assets/img/img_8.jpeg",
      description: "The Great Packers and Movers provides you convenient sources of factory relocation."
    },
    {
      name: "Loading Unloding service",
      src: "/assets/img/img_11.jpeg",
      description: "We are believing in satisfy our customers from each corner in India."
    },
    {
      name: "Labour Supplier ",
      src: "/assets/img/img_26.jpg",
      description: "We provide skilled worker who trained to load and unload goods."
    }
  ]
  ngOnInit(): void {
  }

}
