import { PerChiNonAmaIlPesce, Primi, Secondi } from "../../constants/menu";

export default function MenuRistorante() {
  return (
   
    <div className="container" >
      <div className="text-center mt-4 mb-4">
        <h1>Primi</h1>
      </div>

      {/* sezione per sezione */}
      {Primi.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-100 fw-bold text-dark text-start">{item.name}</div>
            <div className="text-nowrap">{item.price}</div>
          </div>
          <div className="text-start fw-normal text-muted">{item.description}</div>
        </div>
      ))}

<div className="text-center mt-5 mb-4">
        <h1>Secondi</h1>
      </div>

      {/* sezione per sezione */}
      {Secondi.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-100 fw-bold text-dark text-start">{item.name}</div>
            <div className="text-nowrap">{item.price}</div>
          </div>
          <div className="text-start fw-normal text-muted">{item.description}</div>
        </div>
      ))}

<div className="text-center mt-5 mb-4">
        <h1>Per chi non ama il pesce</h1>
      </div>

      {/* sezione per sezione */}
      {PerChiNonAmaIlPesce.map((item, index) => (
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