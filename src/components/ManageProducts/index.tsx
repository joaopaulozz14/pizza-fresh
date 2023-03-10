import { Add } from "../../assets/icons";
import { HTMLAttributes } from "react";
import * as S from "./styles";
import EditProduct from "../EditProduct";

type ManageProductsType = HTMLAttributes<HTMLDivElement>;

type ManageProductsProps = {} & ManageProductsType;

const ManageProducts = ({ ...props }: ManageProductsProps) => {
  return (
    <S.ManageProducts {...props}>
      <S.ManageProductsTitle>Gerenciar Produtos</S.ManageProductsTitle>
      <S.ManageProductsSub>
        <b>Pizzas</b>
      </S.ManageProductsSub>
      <S.ManageProductsContent>
        <S.ManageProductsContentAdd>
          <Add />
          <span>Adicionar Pizza</span>
        </S.ManageProductsContentAdd>
        <S.AddCard>
          <S.EditForm type="text" placeholder="Título" />
          <S.EditForm type="number" placeholder="Preço" />
          <S.EditForm type="text" placeholder="Descrição" />
          <S.EditForm type="url" placeholder="Imagem" />
        </S.AddCard>
        <EditProduct />
      </S.ManageProductsContent>
      <S.ManageProductsActions>
        <S.ManageProductsActionsCancel>Cancelar</S.ManageProductsActionsCancel>
        <S.ManageProductsActionsSave>
          Salvar Mudanças
        </S.ManageProductsActionsSave>
      </S.ManageProductsActions>
    </S.ManageProducts>
  );
};

export default ManageProducts;
