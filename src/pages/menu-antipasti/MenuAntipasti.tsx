import {  AntipastiDiPesce, Montanarine } from "../../constants/menu";

export default function MenuAntipasti() {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <h1>Antipasti Sfiziosi</h1>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="w-100 fw-bold text-dark">Sfincione palermitano</div>
        <div className="text-nowrap">€ 8,00</div>
      </div>

      <div className="text-center mt-4 mb-4">
        <h1>Montanarine</h1>
      </div>

      {/* sezione per sezione */}
      {Montanarine.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-100 fw-bold text-dark text-start">{item.name}</div>
            <div className="text-nowrap">{item.price}</div>
          </div>
          <div className="text-start fw-normal text-muted">{item.description}</div>
        </div>
      ))}

<div className="text-center mt-4 mb-4">
        <h1>Antipasti di Pesce</h1>
      </div>
      {AntipastiDiPesce.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-100 fw-bold text-dark text-start">{item.name}</div>
            <div className="text-nowrap">{item.price}</div>
          </div>
          <div className="text-start fw-normal text-muted">{item.description}</div>
        </div>
      ))}

    </div>

    
  );
}