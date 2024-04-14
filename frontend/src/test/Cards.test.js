import CardsPlantas from "../presentation/components/Cards/CardsPlantas";
import CardsRemedios from "../presentation/components/Cards/CardsRemedios";
import { render, fireEvent, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("CardsRemedios",()=>{
    const remedio={
        dolencia:"gota",
        receta:"infusión",
        id_Plantas:"ortiga,cola de caballo,diente de león, stevia",};
        const onFlip =jest.fn();
        const {getByText, getByRole}= render(
            <CardsRemedios remedio={remedio}onFlip recetaRemedio={recetaRemedio}/>
        );
        it("trae la informacion del reverso cuando clicko",=>{
            const CardsRemedios=getByRole("buttom");
            fireEvent.click(card);
            expect(getByText(remedio.receta)).toBeInTheDocument();
        });
    });
    
describe("CardsPlantas",()=>{
    const planta={
        planta:"tomillo",
        propiedades:"antibacteriana",};
        
        const onFlip =jest.fn();
        const {getByText, getByRole}= render(
            <CardsPlantas planta={planta}onFlip={onFlip}/>
        );
        it("renderiza el anverso con la planta correcta",()=>{
           expect(getByText(planta.nombre)).toBeInTheDocument();
            
        });
    });