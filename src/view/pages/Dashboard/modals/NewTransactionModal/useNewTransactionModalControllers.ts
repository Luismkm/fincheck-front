import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewTransactionModalControllers() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType
  } = useDashboard()

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType
  }
}
