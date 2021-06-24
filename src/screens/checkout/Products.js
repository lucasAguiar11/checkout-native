import React from 'react';
import {
    Provider,
    withTheme,
    IconButton,
    Colors,
    Text,
    Searchbar,
} from 'react-native-paper';

import { ScrollView, TouchableOpacity, Image, View } from 'react-native'

import { styleFAB, style, stylePrd, styleHeader } from '../../styles/checkout/Produtcts';
import { WavyHeader } from '../../components/WavyBackground';
import Button from '../../components/Button';


class Products extends React.Component {

    constructor(props) {
        super(props);

        this._listProducts = this._listProducts.bind(this);
    }

    state = {
        open: false,
        searchQuery: "",
        products: [
            {
                id: 1,
                name: 'Teste',
                amount: 100,
                selected: false,
                urlImg: 'data:image/jpeg;base64,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'
            },
            {
                id: 2,
                name: 'Teste',
                amount: 100,
                selected: false,
                urlImg: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRUSFRUZERIaFRESEhgYERESEBISGBgZGRoVGBgcIS4lHB4rHxgYJjgmKy8xNTU1HCU7QDszPy40NTEBDAwMEA8QHxISHzQhJSs2PzQ0NDQ0NDQ0MTQ0PzQ0MTQ9NDQ2NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQxNDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUDBgcCAf/EAEoQAAIBAgEFCQwGCAYDAAAAAAABAgMEEQUSITFBByIyUWFygbGyBhMUM0JxdJGhs9HSJFJTYnOTFyNDkpSiweFEY2SCg/A0VKP/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQMCBAUG/8QAJBEBAQEAAgICAgMAAwAAAAAAAAECAxEEIRIxQWEiUXETMoH/2gAMAwEAAhEDEQA/AOzAAAAAAAAELKl/Tt6U69R4QhFylhpb4kltbeCS42TTQ91W4aoUKfkzuFKa2ShTjKbT6cPUBzvuj3QMoXFSUITlbU09EKcnGSX35xwk3x6UuRFO7q+mlJzcsVjjKtUk/bMg0E81N6ZS383xylpb9pdWzxhDmrqKObl1iSx1PC8Lj5rZu3679K+d3eLW/wD6T+cwyyncryv55/OT7lFXVWkwxz619sufwePF9dsqyvcceP8AvqfOfI5Zrt4Y6efV+Yi4HmUdup7Gngy6bv5aW+CT/qnQytcuWYsZS4lOq32iYnfPYl/yzx7ZEyNdQhJqSwzvL1tcj5P++bZUYb5dS+mxweJjWe9X3+lNm3/J+bP5xm3/ACfmy+cu0ekVXn3GzPA4b+apISyjHTGTi/u15xfrU0XPc93e5Rt6qpV3KvT1uFR41HFaXmVHpbwx1trRge0iDlmj+qc1w6eFWD2pxeLXSk/YTjyNXUmoq5vAxnF1m3uO9ZPvYVqcK1N51OcVOL5HxrYyUaTuXV8barT8mnc1oQ5ISzZ4eucjdjbcoAAAAAAAAAAAAAAAAAAA51uucC159x7pnRTnW65wLXn3HuwOQxW8jzY9SLKwnjBcja9uP9SA47yHMh1Iz5NnplHzSXU/6FfkY7x/jreFy/Dln7nSVXRV14ltNEGtTbeCWLbwSSbbb1JLazR4703/ACZ3O1fJHyEHLgpy8yb6i28GhT0NRqVPKxwlSp/dS1Tlxt4x4k9EjFcV5y1ybXFi81eZal0G1HL0rJRa1przponZOypKnvZb+nxeVHm/DqI1RmBmXXbCaub3G60K0JxUoNSj1cjWxmVGmWtzOEs6Dwe3bGS4mtpsVhlinPCM8Kc+V7yT5Hs8z9pXrj/ptY8jv7WaIuVfE1vwqnZZLSIuVvEVvwqnZZVM/wAou3vvF/x0Dcp8VdelS7EDfTQdyqS73dLHT4S3hjpwcIYPDofqN+N9wQAAAAAAAAAAAAAAAAAADnW65wLXnXPuzopzrdc4Frzrn3ZMHLHDeQf3KfZRFhPMkpcT0+baWrpfqqb/AMun2UVdeBt8nD69rMcvuWfha44mW2hmqVTyuBTfFKSedJcqjo/3p60V9hWxWY9a1csf7FipbxL70361D4HD3i43ZXezyTlxKgVYihc04QqRnTVSUopU5OTXe5Y452G0nWj38lmxknSuFvoqWGFKck446nilp1ka7hnUqO9injcwWbmU3LBUsHJ4b94t69OnYi3PVjS5cdVW3s6bwUIOOrOk3LFvDSsM5pLHSQTZE1Pvcp03OdO5ca8I0adOUYqMp94hFaJxSpTxUmmm0sN826zKkVLMrKTlCpGTjjCnCUcyTg01BKMljqkksdKw3psRrfpASPkzLGO9b+9BetS+BhkZyFTrHK9Wlgk8+H1ZbF91611chbXGWKVSjWWOZN0qizZbXmvRF6n18hrLPNXgy8z6iLxy+0f8mpLHb9yn/F/irbyLYdEOfblMHm3ctnf83XpxUU3o6V7ToJlWnH0AEJAAAAAAAAAAAAAAAADnW65wLXn3HumdFOd7rnAtefce6Yg0aFLGjS/Cp9hFLd08MTZLJZ1Cl+HT7CKy+onoP+L5Yn+NHHL1qxQpuLTWtai0oVlJYrpXEyvqQPFObi8V0rY0cjy/F7/11vF8n4X9LSWOzHHStDwelYNdKbXServJ7jFY1ac1nYKMaufhnPBySSww0Jt+bkMNOopLFdK2o9KKbWLwWKxaWc0trSxWL5MUcmZub1XVtnJO5XpWtWpJJ3Ec6nOUIOdepvMxxWfBvUm83DDi5CoualScnKc5TlqzpzlOTS1LGWnAn1aScnGOMli1He4SksdG9WODa2Ysd4jDTNKUvJhr08dTDUl9XW9TzdZfnSjXGg1YZsIR8p/rJciawgvVjLzTiRpom1E5Nyk86Tbbb1tvaYpwL81VrFQ2eaq3svM+okSgYay3svM+os69NfU6dy3KZ7y7j/qM7HZphFYew3855uU6rv8AGXZOhleo1Ze30AEJAAAAAAAAAAAAAAAADnW65wLbn3HumdFOdbrnAtufce6YGuRte90reSW8qUKD5FUzI4rp1+srr2GJtEaSnZ0Iv/17fB8UlCOD9Zq08U3GWiSeD856TxtfLE7cjWv5WqSvT0kOcC3uYEKcMTLl4JqLuPm6QoycXingyZRu8dD3r/lfr1GCcDFKByOfxJfuOnweVc/SzlXnhhnNLalvU/OlrI8kRYTlHU9HE9R7VxxrD2o5+uDWP238+VnU9+npniR9ck9q9eHWM1idz7ZXkl+mOUSNcQ3subLqJuY+Iw3kd5Lmy2riZlNKuT3HY9yjVd/jLsnQjnu5Snm3bw0d/Sx2Y5qeHtR0Im/bn5fQAYsgAAAAAAAAAAAAAAAA51uucC159x7pnRTnW65wLbn3HumBBtnhRtl5Dt6DXFn97jiv+8b4ioyzat/rIrGS4S2yj8UbDZWzlaW6Wj9RQcXxSUI6f+8pWThJrBrSsU1isU1rR6DxdT4xweS3O7WpuakiHN4Pk2lvlPJ003OEXjrktkuVcpR1KmnB6HtxWDxOlLLFmL8vp7nDbrRhlA+wq5vKuL4EiObLSn8UV74s6WzWsoUoGKUSdOmYJwNPfiNjHOis+YGSUTGauvFrZzydvpjuOBPmy6j1iYq73subLqKN+PZKy+buG5S13u6W3wlvocIr+jN/OeblPBu/xl2ToRz9Tol7fQAQyAAAAAAAAAAAAAAAADnW65wLbn3HumdFOdbrnAtufce6YEvJC+i23o9v7uJVZSp5ss9anolyPY/6eossiy+jW3o9v2Ii6gmnjqwePmOv4+vj04nP7ta1czx0FTd2MJ61g+NaH/cm1MYzwlqeLi+NfFGZ0zqy9Rr57y1S4ybOOpKa5NEvUQJQcXti+XWbtKiYatqnrSa5VijL5L881n21FXMlwlncq1+o8SuYPbh59BsdXJdP6i6Fh1EOtkmH1PbL4k/LX46WTlx/Skk8TG4k6vkdLTFdDbx9ZXVLbNeDTT4m2V6uvzI2Mbzr6r60YK845sljpwfLsPfeFxe1nitRSjJ4eTJ63xGpy/K5vqfS7NnbuG5THeXcsf8AEZuGHFFPHHpOgGh7lPirr0qXYgb4cCtmTp9ABCQAAAAAAAAAAAAAAAA51uucC259x7pnRTnW65wLbn3HumBmyK/o1t6PQ7EReywj5zzkT/xrb8Ch2Inm/fV1s63D+HD5fuqqtQjNZsv7p8a5SFKE6fC30Nk1s5y2dXUWaJFOBuTfTD4+lZBpnp00TKmS4PTBuD5OD+78MCPOxrR1Zs1yPNl6no9pM5M38sfjUeVEwToIlyp1Vrpy6M2XUzDOFX7Of7jLJv8AaPjf6QKluiHcWcJLCSxXtXmewt5Uav2c/wBxmKdrVf7Kf7kjKck/NZYzqVql3kyUdMd/Hi8pfErbiO8lzZdTN4dhW+yn+5IrcuZEn3mrU73OEo05zk+9yUWlFt48XnKObWfjbL+G7xa13JXRNynxV16VLsQN9NC3KPFXXpT7EDfTz1dMABAAAAAAAAAAAAAAAAAHOt1zgW3PuPdM6Kc63XOBbc+490wMuRF9GtvwKHYieL9a+gy5DX0a29HodiJ8v4a+g6nFfpxeSfy/9VsUS6KI8Ykuii/WkWemeETPGJgnWhBZ0nmr2t8SW1kSeUZvgQwX1p/KviV+79GYtO9o+OEShr1q711GuSMYJdWJVXN3Xjqqz9Y6v9rc5jc8yIjFGhRync/ay9a+BLo3dw/2s/Z8CLNLZx5bxCESD3UQj4FeejXHYkUdKrX+2n/L8DHl2dTwS5xqSa7xXxW9wazJaNRTuXq+1uMTuL/cp8VdekvsQN9NC3KPFXXpL7EDfTntwAAAAAAAAAAAAAAAAAAA51uucC259x7pnRTnW65wLbn3HumBKyGvo1t6Pb9iJku4Y+o+ZCX0a29Ht+xEk1oaDoY1105O892qZQPNxdKCSW+m+Cv6vkMt5NQTk9S0+fkKmmnJuctb9i2I2J79q4kUoOTz5vOl7EuJLYiQ5JGGLwDkRfazMkeK0you3iWVZlVc1orW/VpJk6Wz39I0YaSZRngVs7yK1Rb6Uj5HKP3P5v7EasXY4tf02ClVMeXav0W4X+RW7Eiqp5VjtTXqZ9ypewnb10pJvvNXRqfAexlG+uqumNT7jedyjxV16U+xA300Lco8VdekvsQN9NCrQAEAAAAAAAAAAAAAAAAAc73XOBbc+490zohzrdc4Frz7j3TAsMgr6Nbej2/YiSqrwRH7nsHa2z/09v2InjKtzmRbXCbzYL7z2+ZazdxO+o5up7qlyhLPnmLgwenln/brb4jzGngSaFnLNTSb247XynudvJeS/UzZln0r6/KGfGZadFybb0RXQ2+JCujLtnjHfuqy6bKm4gW1wituEY1t56n0q6yI8pGa5ZDkzDTYzrplUjBfy/VVOZPssZxhvZfq582fUyjf1V/fcdg3KfFXXpUuxA300Lcp8Vdekv3cDfTUqgABAAAAAAAAAAAAAAAAAHO91zgWvPuPdM6Ic63XOBbc+490wJfc3UwtreOx0KGHnzIkZx79Vzv2cdEObtl0v2JGOrjCztM3Q6ltbKT+qlThi+nQi2ydRwguPyvOdDHUz8v7cyy/O5rNCGB5lByaituvkXGZp6D5R0Yy49C8y/v1GHa6ZZXFJYbCFWtKctcV0b1+wkymfB3YtzFHdZFi+BNx5Gs5etavaa/lHJdaCbcM5ccd8vVrXqN5kjDOJM5LFkzHJbnWRJHTsp5Fo1sXKOE/rx3s+nZLpxNMyt3N1qWMo/raevGKefFfeh/VY9BldzTLpr8iPdy3k+bLqZIbI15wJc2XUynV9LI7PuU+KuvSX7uBvpoW5T4q69Jfu4G+mtWIACAAAAAAAAAAAAAAAAAOdbrnAtefce6Z0U53ut8C259x7pgWeSrVTtrXOWK8GtV6qcX1kmEHB4Pp+Jk7k6kZ2NpNanbW/Q1CKa9aaJV1S0GzjfrprcnH7+UQKzPFSeGC4kj5OWx9BDuqm+fR1FkTmekqEzMmQbeZLTI0zzH1nmSPZ8ZhaskYJRPDgSMDy4kWs5Gs5c7ladfGcMKVbXilvKj+/Fan95aePE5vlqyqUc+nUg4TUJaHpTWD30XqkuVHblEoe7e1pSsriVSKbhTnKnLVKE2sI4Plk4rDaYXSbOlhuU+KuvSX7uBvpoW5T4q69Jfu4G+ldYAAIAAAAAAAAAAAAAAAAA0HdWot0raexV3Tlyd8hKKb6Ub8VmXslRurepbyeapx3slpcJp4xkvM0mBxXuC3QJWUPBriEqlum3Bwze+0XJ4yjg2lKOLbwxTTb144LeZbpuS5Lxk1yO2rY+xM5f3Vdy91b1Jd8puMW23NYu3nL68Z7Mdea9KfsoVZ1Nma/wDkpfMZS2I6deuO7/Jj0qrP+HrfKV1z3b2EpNqc8NH7CrxeY5n4FU4o/m0vmHgVTij+bS+YynLqI+MdPo93Ngtc5/kVflJa3QMnfaT/AIet8pyXwGfFH82l8w8BnxR/NpfMLy6qenXP0gZN+0n/AA9b5R+kDJv2k/4et8pyPwKpxR/NpfMPAqnFH82l8xHzqXXP0gZN+0n/AA9b5R+kDJv2k/4et8pyPwKpxR/NpfMPAqnFH82l8w+VT8nW5boOTV5c3yK3q4+1JGl92Pdg72KtqMJU6DlFvOw75VljvU0sVGKenDF4vB6MMDV3Z1FrzV/yU/mNg7k+5W6uaidOm81NYVZJqhTf18fKa2RWnHDYY22l1a61uW0mrevPZO6quPLGMYRx9afqN4K/IuTYW1Cnbw4NOObi9cnrlJ8rbb6SwIQAAAAAAAAAAAAAAAAAAAAAMdfgvzM5N3ReNfQATEKgMAyAAAAAAAAF13M+MXSdXp8FeZHwEUjIADFIAAAAAAAAAAP/2Q=='
            },
            {
                id: 3,
                name: 'Teste',
                amount: 100,
                selected: false,
                urlImg: 'data:image/jpeg;base64,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'
            },
            {
                id: 5,
                name: 'Teste',
                amount: 100,
                selected: false,
                urlImg: 'https://img.lojasrenner.com.br/item/546140777/zoom/5.jpg'
            },
            {
                id: 6,
                name: 'Teste',
                amount: 100,
                selected: false,
                urlImg: 'https://img.lojasrenner.com.br/item/546140777/zoom/5.jpg'
            },
            {
                id: 7,
                name: 'Teste',
                amount: 100,
                selected: false,
                urlImg: 'https://img.lojasrenner.com.br/item/546140777/zoom/5.jpg'
            }
        ]
    }

    _setCheck(prd) {
        const selectedPrd = this.state.products.find((x) => x.id == prd.id);
        selectedPrd.selected = !selectedPrd.selected;

        this.setState(prev => ({
            ...prev,
            availableGen: true,
            selectedPrd
        }));
    }

    _itemPrd({ prd }) {

        const _amount = parseFloat(prd.amount).toFixed(2);
        return (
            <View key={prd.id} style={stylePrd.card}>
                <Image source={{ uri: prd.urlImg }} style={stylePrd.Img} resizeMode={'contain'} />
                <View style={stylePrd.fav}>
                    <IconButton
                        icon={prd.selected ? 'check-circle' : 'check-circle-outline'}
                        size={25}
                        color={Colors.green400}
                        onPress={() => this._setCheck(prd)}
                    />
                </View>
                <View style={stylePrd.priceContainer}>
                    <Text style={stylePrd.nameProd}>{prd.name}</Text>
                    <Text style={stylePrd.pricePrd}>{`R$ ${_amount}`}</Text>
                </View>
            </View>
        );

    }

    _listProducts() {
        const products = this.state.products;
        return products.map((e, i) => {
            return this._itemPrd({ prd: e });
        });
    }

    _genLink() {
        const prods = this.state.products;
        console.log(prods.some(x => x.selected));
    }

    render() {

        const theme = this.props.theme;

        const Header = () => (
            <View style={styleHeader.container}>
                <Text style={styleHeader.title}>
                    Seus Produtos
                </Text>
                <Text style={styleHeader.subtitle}>
                    Selecione ou cadastre os produto do seu link de pagamento.</Text>
                <Searchbar
                    placeholder="Buscar"
                    value={this.state.searchQuery}
                />
            </View>
        );

        const Footer = () => {

            if (!this.state.products.some(x => x.selected))
                return null;

            return (
                <View >
                    <Button
                        mode={'contained'}
                        theme={theme}
                        style={style.button}
                        uppercase={true}
                        onPress={() => this._genLink()}
                    >
                        Gerar Link
                    </Button>
                </View>
            );
        }

        return (
            <Provider>
                <ScrollView>
                    <View style={style.mainContainer}>
                        <WavyHeader />
                        <Header />
                        <View style={style.productsList} >
                            {this._listProducts()}
                        </View>
                    </View>
                </ScrollView>
                <Footer />
            </Provider>

        );
    }
}

export default withTheme(Products);