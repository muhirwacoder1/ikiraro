import { useState } from 'react';
import { subjectOptions, difficultyOptions, addMission } from '../services/missionsStore';

/*
  Create Mission Modal Component
  Form for companies to create new missions
*/

export default function CreateMissionModal({ isOpen, onClose, onMissionCreated }) {
    const [formData, setFormData] = useState({
        title: '',
        subject: 'Technology',
        description: '',
        location: '',
        difficulty: 'Intermediate',
        company: 'Bank of Kigali'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Get subject details
        const subjectInfo = subjectOptions.find(s => s.value === formData.subject);
        const difficultyInfo = difficultyOptions.find(d => d.value === formData.difficulty);

        const newMission = {
            ...formData,
            icon: subjectInfo?.icon || 'assignment',
            color: subjectInfo?.color || 'blue',
            points: difficultyInfo?.points || 350
        };

        const createdMission = addMission(newMission);

        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({
                title: '',
                subject: 'Technology',
                description: '',
                location: '',
                difficulty: 'Intermediate',
                company: 'Bank of Kigali'
            });
            if (onMissionCreated) {
                onMissionCreated(createdMission);
            }
            onClose();
        }, 500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-12 rounded-xl bg-white/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-2xl">rocket_launch</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">Create New Mission</h2>
                                <p className="text-white/70 text-sm">Design a challenge for students to solve</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="size-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-bold text-text-main-light dark:text-text-main-dark mb-2">
                            Mission Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="e.g., Build a Customer Analytics Dashboard"
                            className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light"
                        />
                    </div>

                    {/* Subject & Difficulty */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-text-main-light dark:text-text-main-dark mb-2">
                                Subject Area *
                            </label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-main-light dark:text-text-main-dark"
                            >
                                {subjectOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-text-main-light dark:text-text-main-dark mb-2">
                                Difficulty Level *
                            </label>
                            <select
                                name="difficulty"
                                value={formData.difficulty}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-main-light dark:text-text-main-dark"
                            >
                                {difficultyOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.value} (+{option.points} PP)
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-bold text-text-main-light dark:text-text-main-dark mb-2">
                            Location / Context
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g., Kigali, Rwanda or Remote"
                            className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-bold text-text-main-light dark:text-text-main-dark mb-2">
                            Mission Description *
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Describe the challenge, objectives, and what students will learn or accomplish..."
                            className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light resize-none"
                        ></textarea>
                    </div>

                    {/* Preview Card */}
                    <div className="bg-background-light dark:bg-background-dark rounded-xl p-4 border border-border-light dark:border-border-dark">
                        <p className="text-xs font-bold text-text-sub-light uppercase tracking-wider mb-3">Preview</p>
                        <div className="flex items-start gap-3">
                            <div className={`size-10 rounded-lg bg-${subjectOptions.find(s => s.value === formData.subject)?.color || 'blue'}-100 dark:bg-${subjectOptions.find(s => s.value === formData.subject)?.color || 'blue'}-900/30 flex items-center justify-center`}>
                                <span className="material-symbols-outlined text-primary">
                                    {subjectOptions.find(s => s.value === formData.subject)?.icon || 'assignment'}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-text-main-light dark:text-text-main-dark truncate">
                                    {formData.title || 'Mission Title'}
                                </h4>
                                <p className="text-xs text-text-sub-light truncate">
                                    {formData.description || 'Mission description will appear here...'}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
                                        {formData.subject}
                                    </span>
                                    <span className="text-xs text-text-sub-light">
                                        +{difficultyOptions.find(d => d.value === formData.difficulty)?.points || 350} PP
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 rounded-xl border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark font-medium hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting || !formData.title || !formData.description}
                            className="flex-1 px-4 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-lg">add_circle</span>
                                    Create Mission
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
