import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useAccountsController() {
  const windowWidth = useWindowWidth()
  const {
    areValuesVisible,
    toggleValueVisibility,
    openNewAccountModal
  } = useDashboard()

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false
  })

  return {
    sliderState,
    setSliderState,
    windowWidth,
    toggleValueVisibility,
    areValuesVisible,
    isLoading: false,
    accounts: [],
    openNewAccountModal
  }
}
