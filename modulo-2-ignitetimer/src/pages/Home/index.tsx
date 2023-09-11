import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, Separator, StartCountDownButton } from "./styles";

export function Home() {
  return(
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>
          <CountDownContainer>
            <span>0</span>
            <span>0</span>
            <Separator> : </Separator>
            <span>0</span>
            <span>0</span>
          </CountDownContainer>
          <StartCountDownButton disabled type="submit">
            <Play size={24}/>
            Começar
          </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
