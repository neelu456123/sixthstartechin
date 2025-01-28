export async function GET(request, { params }) {
    const { slug } = params;
    console.log('Slug received:', slug);  // Debugging
  
    try {
      const query = `
        SELECT 
          s.id,
          s.title,
          s.slug,
          s.category,
          s.author,
          s.thumbnail,
          s.created_at,
          COALESCE(
            JSON_ARRAYAGG(
              JSON_OBJECT(
                'page_number', p.page_number,
                'title', p.title,
                'description', p.description,
                'media_type', p.media_type,
                'media_url', p.media_url
              )
            ), '[]'
          ) AS pages
        FROM stories s
        LEFT JOIN story_pages p ON s.id = p.story_id
        WHERE s.slug = ?
        GROUP BY s.id;
      `;
  
      const [stories] = await db.execute(query, [slug]);
      console.log('Stories fetched:', stories);  // Debugging
  
      if (stories.length === 0) {
        return NextResponse.json({ error: 'Story not found' }, { status: 404 });
      }
  
      const story = stories[0];
      story.pages = JSON.parse(story.pages || '[]');
  
      return NextResponse.json(story);
    } catch (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
  