import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search]);

    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }

    return (
        <div>
            <div className='text-center mb-6'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className='my-5 text-5xl font-bold'>Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which don't look even slightly believable. </p>
                <input className='input input-sm' ref={searchRef} type="text" />
                <button onClick={handleSearch}>Search</button>
                <button className='btn btn-primary mt-2' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;