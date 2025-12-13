-- Clear existing learning materials (if needed)
DELETE FROM learning_materials;

-- Reset the sequence
ALTER SEQUENCE learning_materials_seq RESTART WITH 1;

-- Insert 20 learning materials across different categories
INSERT INTO learning_materials (title, author, duration, description, type, video_url, category, created_at) VALUES
-- Cardiology (4 materials)
('Understanding Heart Health', 'Dr. John Smith', '15 mins', 'A comprehensive guide to maintaining heart health and preventing cardiovascular diseases', 'VIDEO', 'https://example.com/heart-health.mp4', 'Cardiology', CURRENT_TIMESTAMP),
('Signs of Heart Disease', 'Dr. Emily Chen', '12 mins', 'Learn to recognize early warning signs and symptoms of heart disease', 'VIDEO', 'https://example.com/heart-disease-signs.mp4', 'Cardiology', CURRENT_TIMESTAMP),
('Managing Blood Pressure', 'Dr. Michael Brown', '20 mins', 'Essential tips and lifestyle changes for controlling high blood pressure', 'ARTICLE', NULL, 'Cardiology', CURRENT_TIMESTAMP),
('Heart-Healthy Living', 'Dr. Sarah Johnson', '10 mins', 'Daily habits and practices for a healthy heart', 'PODCAST', 'https://example.com/heart-healthy.mp3', 'Cardiology', CURRENT_TIMESTAMP),

-- Nutrition (4 materials)
('Healthy Heart Diet Tips', 'Nutritionist Lisa Adams', '18 mins', 'Foods that promote cardiovascular health and recipes to try', 'VIDEO', 'https://example.com/heart-diet.mp4', 'Nutrition', CURRENT_TIMESTAMP),
('Understanding Cholesterol', 'Dr. Robert Wilson', '14 mins', 'What you need to know about good and bad cholesterol', 'ARTICLE', NULL, 'Nutrition', CURRENT_TIMESTAMP),
('Mediterranean Diet Guide', 'Chef Maria Garcia', '25 mins', 'A complete guide to the heart-healthy Mediterranean diet', 'VIDEO', 'https://example.com/mediterranean-diet.mp4', 'Nutrition', CURRENT_TIMESTAMP),
('Nutrition for Heart Patients', 'Dietitian James Lee', '16 mins', 'Special dietary considerations for people with heart conditions', 'PDF', 'https://example.com/heart-nutrition.pdf', 'Nutrition', CURRENT_TIMESTAMP),

-- Exercise (4 materials)
('Cardio Exercises for Beginners', 'Fitness Coach Tom Harris', '22 mins', 'Safe and effective cardiovascular exercises for all fitness levels', 'VIDEO', 'https://example.com/cardio-beginners.mp4', 'Exercise', CURRENT_TIMESTAMP),
('Walking for Heart Health', 'Dr. Patricia Martinez', '10 mins', 'The benefits of walking and how to create a walking routine', 'ARTICLE', NULL, 'Exercise', CURRENT_TIMESTAMP),
('Strength Training Basics', 'Personal Trainer Alex Kim', '28 mins', 'Building muscle safely while protecting your heart', 'VIDEO', 'https://example.com/strength-training.mp4', 'Exercise', CURRENT_TIMESTAMP),
('Yoga for Heart Health', 'Yoga Instructor Nina Patel', '30 mins', 'Gentle yoga poses that support cardiovascular wellness', 'VIDEO', 'https://example.com/yoga-heart.mp4', 'Exercise', CURRENT_TIMESTAMP),

-- Mental Health (4 materials)
('Manage Stress with Breathing Techniques', 'Dr. David Thompson', '5 mins', 'Simple breathing exercises to reduce stress and improve heart health', 'VIDEO', 'https://example.com/breathing-techniques.mp4', 'Mental Health', CURRENT_TIMESTAMP),
('Meditation for Heart Health', 'Mindfulness Expert Rachel Green', '15 mins', 'How meditation can lower blood pressure and reduce stress', 'PODCAST', 'https://example.com/meditation-heart.mp3', 'Mental Health', CURRENT_TIMESTAMP),
('Sleep and Heart Health', 'Sleep Specialist Dr. Karen White', '12 mins', 'Understanding the connection between quality sleep and heart health', 'ARTICLE', NULL, 'Mental Health', CURRENT_TIMESTAMP),
('Managing Anxiety', 'Psychologist Dr. Mark Anderson', '20 mins', 'Techniques to cope with anxiety and protect your heart', 'VIDEO', 'https://example.com/managing-anxiety.mp4', 'Mental Health', CURRENT_TIMESTAMP),

-- General Health (4 materials)
('Heart Disease Prevention', 'Dr. Jennifer Lopez', '18 mins', 'Comprehensive strategies to prevent heart disease', 'VIDEO', 'https://example.com/prevention.mp4', 'General Health', CURRENT_TIMESTAMP),
('Quit Smoking for Good', 'Dr. Richard Clark', '14 mins', 'Evidence-based methods to quit smoking and improve heart health', 'ARTICLE', NULL, 'General Health', CURRENT_TIMESTAMP),
('Regular Health Checkups', 'Dr. Susan Miller', '10 mins', 'Why regular checkups are crucial for heart health', 'PODCAST', 'https://example.com/checkups.mp3', 'General Health', CURRENT_TIMESTAMP),
('Understanding Your Lab Results', 'Dr. William Davis', '16 mins', 'How to interpret common heart health lab tests', 'PDF', 'https://example.com/lab-results.pdf', 'General Health', CURRENT_TIMESTAMP);

-- Verify the data was inserted
SELECT 
    id,
    title,
    author,
    category,
    type,
    duration
FROM learning_materials
ORDER BY category, id;

-- Show count by category
SELECT 
    category,
    COUNT(*) as material_count,
    COUNT(CASE WHEN type = 'VIDEO' THEN 1 END) as videos,
    COUNT(CASE WHEN type = 'ARTICLE' THEN 1 END) as articles,
    COUNT(CASE WHEN type = 'PODCAST' THEN 1 END) as podcasts,
    COUNT(CASE WHEN type = 'PDF' THEN 1 END) as pdfs
FROM learning_materials
GROUP BY category
ORDER BY category;
