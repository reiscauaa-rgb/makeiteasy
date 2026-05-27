import React from 'react';

export function PreviewIFrame(props: any) {
    const { document } = props;
    const slug = document?.displayed?.slug?.current;

    if (!slug) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif', color: '#666' }}>
                <h3>Nenhum Slug definido</h3>
                <p>Por favor, adicione um título e gere o <strong>Slug</strong> para poder visualizar a página.</p>
            </div>
        );
    }

    // Se estivermos em produção, poderíamos usar a URL de produção dinamicamente
    // _rev muda a cada alteração, forçando o iframe a recarregar
    const rev = document?.displayed?._rev || '';
    const url = `/blog/${slug}?preview=true&rev=${rev}`;

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <iframe
                key={rev} // O React recria o iframe quando a key muda
                src={url}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Pré-visualização do Post"
            />
        </div>
    );
}
