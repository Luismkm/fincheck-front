import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModalControllers } from "./useNewTransactionModalControllers";

export function NewTransactionModal() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType
  } = useNewTransactionModalControllers()

  const isExpense = newTransactionType === 'EXPENSE'

  return(
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={ isExpense ? "Nome da Despesa" : 'Nome da Rceita'}
          />

          <Select
            placeholder="Categoria"
            options={[
              {
                value: 'CHECKING',
                label: 'Conta Corrente',
              },
              {
                value: 'INVESTMENT',
                label: 'Investimentos',
              },
              {
                value: 'CASH',
                label: 'Dinheiro Físico',
              }
            ]}
          />

            <Select
              placeholder={isExpense ? 'Pagar com' : 'Receber com'}
              options={[
                {
                  value: 'CHECKING',
                  label: 'Conta Corrente',
                },
                {
                  value: 'INVESTMENT',
                  label: 'Investimentos',
                },
                {
                  value: 'CASH',
                  label: 'Dinheiro Físico',
                }
              ]}
            />
        </div>
      </form>
    </Modal>
  )
}