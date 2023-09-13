import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";

export function NewCycleForm(){
    return(
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            disabled={!!activeCycle}
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            disabled={!!activeCycle}
            placeholder="00"
            step={5}
            min={1}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>
    )
}