import { Edit } from "../../assets/icons";
import * as S from "./styles";


const EditProduct = () => {
    return (
        <S.EditProduct>
            <>
                <S.EditProductImage src="" alt="Pizza de..." />
                <S.EditProductDetails>
                    <S.EditProductDetailsName>Nome do Produto</S.EditProductDetailsName>
                    <S.EditProductDetailsPrice>R$ 00,00</S.EditProductDetailsPrice>
                    <S.EditProductDetailsDescription>Descrição do Produto</S.EditProductDetailsDescription>
                </S.EditProductDetails>

                <S.EditProductAction>
                    <Edit /> Editar
                </S.EditProductAction>
            </>
            <S.EditFormGroup>
                <S.EditForm
                    type="text"
                    placeholder="Título"
                />
                <S.EditForm
                    type="number"
                    placeholder="Preço"
                />
                <S.EditForm
                    type="text"
                    placeholder="Descrição"
                />
                <S.EditForm
                    type="url"
                    placeholder="Imagem"
                />
                <S.Delete>Deletar</S.Delete>
            </S.EditFormGroup>
        </S.EditProduct>
    );
}

export default EditProduct;
