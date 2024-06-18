import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, message } from 'antd';
import useGetAllEventResponses from "../hook/Events/useGetAllEventResponses";
import useGetSingleEvents from "../hook/Events/useGetSingleEvents";
import acceptResponse from "../hook/Events/acceptResponse";
import rejectResponse from "../hook/Events/rejectResponse";

const EventResponses = () => {
    const { id } = useParams();
    const [event] = useGetSingleEvents(id);
    const [eventResponses] = useGetAllEventResponses(id);

    const handleAccept = async (responseId) => {
        try {
            await acceptResponse(responseId);
            message.success('Response accepted successfully!');
            // Optionally, refresh the list or update the state to reflect changes
        } catch (error) {
            message.error('Failed to accept response. Please try again.');
        }
    };

    const handleReject = async (responseId) => {
        try {
            await rejectResponse(responseId);
            message.success('Response rejected successfully!');
            // Optionally, refresh the list or update the state to reflect changes
        } catch (error) {
            message.error('Failed to reject response. Please try again.');
        }
    };

    return (
        <div>
            <div>
                <Button type="primary" style={{ marginBottom: 16 }}>
                    Back
                </Button>
                
            </div>
            <h1>{event['event_title']}</h1>
            <p>{event['description']}</p>
            <div className="response-list">
                {eventResponses.map(response => (
                    <Card
                        key={response.id}
                        title={response.name}
                        extra={
                            <div className="action-buttons">
                                <Button type="primary" onClick={() => handleAccept(response.id)} style={{ marginRight: 8 }}>
                                    Accept
                                </Button>
                                <Button type="danger" onClick={() => handleReject(response.id)}>
                                    Reject
                                </Button>
                            </div>
                        }
                        style={{ marginBottom: 16 }}
                    >
                        <p>Email: {response.email}</p>
                        <p>Phone: {response.phone}</p>
                        <p>Amount: {response.amount}</p>
                        <p>Transaction ID: {response.trxId}</p>
                        <p>Comment: {response.comment}</p>
                        <p>Status: {response.status}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default EventResponses;
