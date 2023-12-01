import { httpClient } from "../httpClient";

export interface CreateBankAccountsParams {
  name: string
  initialBalance: number
  color: string
  type: 'CHECKING' | 'INVESTMENT'| 'CASH'
}

export async function create(params: CreateBankAccountsParams) {
  const { data } = await httpClient.post('/bank-accounts', params)
  return data;
}
