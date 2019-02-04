import React, { Component } from "react";
import Footer from "./footer";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabeceras: [
        {
          id: 0,
          titulo: "Nombre",
          dato: "nombre"
        },
        {
          id: 1,
          titulo: "Historia",
          dato: "historia"
        }
      ],
      superheroes: [
        {
          id: 0,
          nombre: "Superopaco",
          historia: "No deja pasar la luz a través de él"
        },
        {
          id: 1,
          nombre: "Supertaxista",
          historia: "No deja pasar a los VTCs a través de sí"
        },
        {
          id: 2,
          nombre: "Supermercado",
          historia: "Aglutina el mayor número de ofertas posibles de 3x2"
        }
      ]
    };
  }
  render() {
    return (
      <div className="m-5">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {this.state.cabeceras.map(cabecera => (
                <th key={cabecera.id} scope="col">
                  {cabecera.titulo}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.superheroes.map(superheroe => {
              const fila = this.state.cabeceras.map(cabecera => {
                return <td key={cabecera.id}>{superheroe[cabecera.dato]}</td>;
              });

              return <tr key={superheroe.id}>{fila}</tr>;
            })}
          </tbody>
        </table>
        <Footer
          fpage="first_page"
          chevleft="chevron_left"
          chevright="chevron_right"
          lpage="last_page"
        />
      </div>
    );
  }
}

export default Table;
