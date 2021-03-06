import React from "react";
import { useSelector } from "react-redux";

export default function ResumoPedido() {
    const pedido = useSelector(state => state.pedido);
    const frete = 5;

    return(
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Un.</th>
                    <th>Qtd</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                {pedido.itens.map(item => 
                    <tr>
                        <td>{item.nome}</td>
                        <td>R${item.valor}</td>
                        <td>{item.qtd}</td>
                        <td>R${item.valor * item.qtd}</td>
                    </tr>
                )}
                <tr>
                    <td><strong>Subtotal</strong></td>
                    <td>-</td>
                    <td>-</td>
                    <td>R$
                    {
                        pedido.itens
                        .map(item => item.qtd * item.valor)
                        .reduce((valorAnterior, valorAtual) => 
                            valorAnterior + valorAtual
                        ,0)
                    }
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Frete</td>
                    <td>-</td>
                    <td>-</td>
                    <td>R${frete}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td><strong>Total</strong></td>
                    <td>-</td>
                    <td>-</td>
                    <td>R$
                    {
                        pedido.itens
                        .map(item => item.qtd * item.valor )
                        .reduce((valorAnterior, valorAtual) => 
                            valorAnterior + valorAtual 
                        ,frete)
                    } 
                    </td>
                </tr>
            </tfoot>

        </table>
    );
}