"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
    const faqs = [
        {
            question: "Do I need a gym to follow your plans?",
            answer:
                "No, not at all! I offer both home and gym workout plans. If you don’t have any equipment, I’ll create effective bodyweight routines that still deliver results.",
        },
        {
            question: "Will I get a diet plan too?",
            answer:
                "Yes! Every plan includes a personalized diet chart tailored to your lifestyle, food preferences (Veg/Egg/Indian), and goals. No crash diets—just balanced, realistic nutrition.",
        },
        {
            question: "I’m a complete beginner. Can I still join?",
            answer:
                "Absolutely! My programs are designed for all fitness levels. Whether you’re just starting out or experienced, I’ll guide you step by step.",
        },
        {
            question: "How soon will I see results?",
            answer:
                "Most clients start seeing changes within 3–4 weeks if they stay consistent. Noticeable transformations usually occur in 8–12 weeks depending on your effort and adherence.",
        },
        {
            question: "How do I stay in touch with you?",
            answer:
                "I provide regular check-ins via WhatsApp or email. You’ll get personal guidance and can ask questions anytime—I’m here to support you.",
        },
        {
            question: "Can I follow this if I’m working or have a busy schedule?",
            answer:
                "Yes! I design flexible plans that fit into your lifestyle. Even 30–40 minutes a day is enough when done smartly and consistently.",
        },
        {
            question: "What makes this different from YouTube workouts?",
            answer:
                "YouTube workouts are generic. My plans are 100% personalized to your body, goals, and routine. Plus, I track your progress and adjust the program as needed.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container-padding">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-700 text-lg">Everything you need to know before getting started</p>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-xl p-4 shadow-sm">
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center text-left"
                            >
                                <span className="font-semibold text-gray-800">{faq.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-primary" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-primary" />
                                )}
                            </button>
                            {activeIndex === index && (
                                <p className="mt-3 text-gray-600 transition-all duration-300">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}