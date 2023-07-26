import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de Site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de APP</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 15.500,00
                </PriceHighLight>
              </td>
              <td>Compra</td>
              <td>20/06/2023</td>
            </tr>
            <tr>
              <td width="40%">Compras de Casa</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 350,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>03/07/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
