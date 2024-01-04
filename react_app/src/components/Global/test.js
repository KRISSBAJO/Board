// Import statements
import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import useEmployee from '../context/useEmployee';
import { getHoursWorked } from '../services/api';
import ClockOut from './ClockOut';
import EditHours from './EditHours';

function HoursWorked() {
    const { employeeId } = useUser();
    const { employee } = useEmployee();
    console.log('Employee ID: ', employeeId);
    console.log('Employee: ', employee);
    const [data, setData] = useState({ entries: [], total_hours: '0h 0m' });
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [currentEntry, setCurrentEntry] = useState('');

    useEffect(() => {
        const fetchHours = async () => {
            if (employeeId) {  // Check if employeeId is available
                try {
                    const responseData = await getHoursWorked(employeeId);
                    console.log('Hours Worked: ', responseData);
                    setData(responseData);
                } catch (error) {
                    alert('Error fetching hours!');
                }
            }
        };

        fetchHours();
    }, [employeeId]);

    const refreshHours = async () => {
        try {
          const responseData = await getHoursWorked(employeeId);
          setData(responseData);
        } catch (error) {
          alert('Error fetching updated hours!');
        }
      };
      
      // Then, inside handleEditClick function
      const handleEditClick = (entry) => {
        setCurrentEntry(entry);
        setEditModalVisible(true);
      };
      
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <h2 className="text-xl font-bold text-center mt-12 mb-4">Welcome {employee?.first_name} {employee?.last_name}</h2>
            <div className="overflow-x-auto mx-4">
                <table className="w-full table-auto bg-white text-gray-900 rounded-lg">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">In</th>
                            <th className="px-4 py-2">Out</th>
                            <th className="px-4 py-2">Transfer</th>
                            <th className="px-4 py-2">In</th>
                            <th className="px-4 py-2">Out</th>
                            <th className="px-4 py-2">Pay Code</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">Shift</th>
                            <th className="px-4 py-2">Daily</th>
                            <th className="px-4 py-2">Period</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {data.entries.map((entry, index) => (
                            <tr key={index} className="text-gray-700">
                                <td className="border px-4 py-2">{/* Date value here */}</td>
                                <td className='dark:bg-gray-800 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-800'>{entry.clock_in || 0}</td>
                                <td className='dark:bg-gray-800 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-800 '>{entry.clock_out || '---'}</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">{0}</td>
                                <td className="border px-4 py-2">{0}</td>
                                <td className="border px-4 py-2">{0}</td>
                                <td className='dark:bg-gray-800 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-800'>{entry.hours}</td>
                                <td className='dark:bg-gray-800 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-800'>{entry.hours}</td>
                                <td className='dark:bg-gray-800 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-800'>{entry.hours}</td>
                                <td className='dark:bg-gray-800 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-800'>
                    {entry.clock_out ? (
                        <button
                            onClick={() => handleEditClick(entry)}
                            className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        >
                            Edit
                        </button>
                        ) : (
                        <ClockOut entryId={entry.id} />
                        )}
                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HoursWorked;
