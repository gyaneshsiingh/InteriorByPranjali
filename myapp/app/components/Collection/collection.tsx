'use client'
import Image from 'next/image';
import { CollectionItemType } from './collection.type';
import { COLLECTION_COLUMN_1, COLLECTION_COLUMN_2, COLLECTION_CONTENT } from './collection.constant';
import "./collection.modules.css"
import react, { useState } from 'react'


const Card = ({ item, onOpen }: { item: CollectionItemType, onOpen: () => void }) => (
    <div className='vh-collection-card' style={{ height: item.height }} onClick={onOpen}>
        <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width:960px) 100vw, 50vw"
            className='vh-card-img'
        />
        <div className='vh-card-overlay'>
            <h3 className='vh-card-title'>{item.title}</h3>
            <div className='vh-card-icon'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
            </div>
        </div>
    </div>
);

const Collection = () => {
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    return (
        <section className='vh-collection-section' id='portfolio'>
            <div className='vh-collection-header'>
                <h2 className='vh-collection-title'>
                    {COLLECTION_CONTENT.title}
                </h2>
                <div className='vh-collection-header-right'>
                    <p className='vh-collection-desc'>
                        {COLLECTION_CONTENT.description}
                    </p>
                </div>
            </div>

            <div className='vh-collection-grid'>
                <div className='vh-collection-col'>
                    {COLLECTION_COLUMN_1.map((item) => (
                        <Card
                            key={item.id} item={item}
                            onOpen={() => setIsPortfolioOpen(true)} />
                    ))}
                </div>

                <div className='vh-collection-col'>
                    {COLLECTION_COLUMN_2.map((item) => (
                        <Card
                            key={item.id} item={item}
                            onOpen={() => setIsPortfolioOpen(true)} />
                    ))}
                </div>
            </div>

            {isPortfolioOpen &&
                (
                    <div className='vh-portfolio-modal'>
                        <div className='vh-portfolio-header'>
                            <button onClick={() => setIsPortfolioOpen(false)}
                                className='vh-portfolio-back-btn'>
                                ← Back to Website
                            </button>
                        </div>

                        <iframe
                            src="https://docs.google.com/gview?url=https://myapp-theta-ruby.vercel.app/portfolio.pdf&embedded=true"
                            className='vh-portfolio-iframe'
                            title='Portfolio'
                        />
                    </div>
                )}
        </section>
    );
};

export default Collection;

