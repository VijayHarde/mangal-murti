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
      name: "DOMESTIC RELOCATION",
      src: "https://premcargopackers.in/img/service/domestic.jpg",
      description: "Prem Cargo Packers & Movers is an institution of the betterment of services related to packing and moving, loading and unloading, shifting services, domestic relocation services."
    },
    {
      name: "CORPORATE RELOCATION",
      src: "https://premcargopackers.in/img/service/corpo-2.png",
      description: "We offer a reliable and dependable service for corporate relocation. Royal Home Relocation Packers & Movers in Pune are a very prominent service provider for corporate relocation services."
    },
    {
      name: "WAREHOUSING/STORAGE",
      src: "https://premcargopackers.in/img/service/warehouse-1.jpg",
      description: "Warehouse and Storage Services is Pune offered by Prem Cargo Packers & Movers also offers by all Packers and Movers for giving them best support to industry business persons."
    },
    {
      name: "LOCAL SHIFTING",
      src: "https://premcargopackers.in/img/service/local-1.jpg",
      description: "Packers And Movers in Pune Local are one of the leading packers and movers."
    },
    {
      name: "FACTORY RELOCATION",
      src: "https://premcargopackers.in/img/service/factory-1.jpg",
      description: "Prem Cargo Packers & Movers provides you convenient sources of factory relocation."
    },
    {
      name: "GOOD INSURANCE SERVICE",
      src: "https://premcargopackers.in/img/service/insurance-1.jpg",
      description: "We are believing in satisfy our customers from each corner in India."
    },
  ]
  ngOnInit(): void {
  }

}
