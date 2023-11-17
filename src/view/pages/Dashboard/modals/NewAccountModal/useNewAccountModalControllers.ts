import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewAccountModalControllers() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal
  } = useDashboard()

  return {
    isNewAccountModalOpen,
    closeNewAccountModal
  }
}
