import * as S from "./Tradutor-styles";
import tradutor from "./tradutor.png";
import br from "./br.png";
import usa from "./usa.png";

export default function App() {
  return (
    <S.Container>
      <button className="label">
        <img src={tradutor} alt="tradutor" />
      </button>

      <div className="content">
        <S.Span>Selecione o idioma</S.Span>
        <S.IconContainer>
          <S.Icon>
            <img src={br} alt="portugues" />
            <span>PT</span>
          </S.Icon>

          <S.Icon>
            <img src={usa} alt="ingles" />
            <span>US</span>
          </S.Icon>
        </S.IconContainer>
      </div>
    </S.Container>
  );
}
