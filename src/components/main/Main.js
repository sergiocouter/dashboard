import hello from '../../assets/hello.png';
import Charts from '../charts/Charts';
// import Chart from '../charts/Chart';
import './Main.css';

const Main = () => {
    return(
        <main>
            <div className='main__container'>
                <div className='main__title'>
                    <img src={hello} alt='hello'/>
                    <div className='main__greeting'>
                        <h1>Olá Sérgio</h1>
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>

                <div className='main__cards'>
                    <div className='card'>
                        <i className='fa fa-file-text fa-2x text-lightblue'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Número de pedidos</p>
                            <span className='font-bold text-title'>578</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-money fa-2x text-red'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Pagamentos</p>
                            <span className='font-bold text-title'>R$ 3.313</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-archive fa-2x text-yellow'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Número de produto</p>
                            <span className='font-bold text-title'>769</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-bars fa-2x text-green'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Categorias</p>
                            <span className='font-bold text-title'>30</span>
                        </div>
                    </div>
                </div>

                <div className='charts'>
                    <div className='charts__left'>
                        <div className='charts__left__title'>
                            <div>
                                <h1>Daily Report</h1>
                                <p>Uberlândia, Minas Gerais, BR</p>
                            </div>
                            <i className='fa fa-usd'></i>
                        </div>
                        <Charts />
                    </div>

                    <div className='charts__right'>
                        <div className='charts__right__title'>
                            <div>
                                <h1>Daily Report</h1>
                                <p>Uberlândia, Minas Gerais, BR</p>
                            </div>
                            <i className='fa fa-area-chart'></i>
                        </div>

                        <div className='charts__right__cards'>
                            <div className='card1'>
                                <h1>Lucro</h1>
                                <p>R$ 3.500</p>
                            </div>
                        </div>

                        <div className='charts__right__cards'>
                            <div className='card2'>
                                <h1>Pagamentos</h1>
                                <p>R$ 350,00</p>
                            </div>
                        </div>

                        <div className='charts__right__cards'>
                            <div className='card3'>
                                <h1>Custo de hospedagem</h1>
                                <p>R$ 150,00</p>
                            </div>
                        </div>

                        <div className='charts__right__cards'>
                            <div className='card4'>
                                <h1>Banco de dados</h1>
                                <p>R$ 420,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
