import { Link, useParams } from "react-router-dom";

export default function ProductList({products, type}) {

    const { types } = useParams()

    const product = products.filter(product => product.type === types)

    return (
        <section><h2>All {types} {type}</h2>
        <article className="products">
            <ul>
                { types ? product.map(product => {
                        return (
                            <li key={product.id}>
                            <Link to={`/${type.toLowerCase()}/${product.id}`}>
                                <h4>{product.name}</h4>
                                <h4>
                                <img src={product.image} alt={product.name} />
                                </h4>
                            </Link>
                            </li>
                        )
                    }) :
                    products.map(product => {
                        return (
                            <li key={product.id}>
                            <Link to={`/${type.toLowerCase()}/${product.id}`}>
                                <h4>{product.name}</h4>
                                <h4>
                                <img src={product.image} alt={product.name} />
                                </h4>
                            </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </article>
        </section>
    );
  };